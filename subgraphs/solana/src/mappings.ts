import { Protobuf } from "as-proto/assembly";
import { Events } from "./pb/mydata/v1/Events";
import { Event } from "./pb/mydata/v1/Event";
import { BigInt, log, crypto, Bytes } from "@graphprotocol/graph-ts";
import { Account, Transaction, Transfer } from "../generated/schema"

export function handleTriggers(bytes: Uint8Array): void {
  const input = Protobuf.decode<Events>(bytes, Events.decode);

  input.data.forEach((event, index) => {
    let transaction = getOrCreateTransaction(event);
    let transfer = event.transfer;
    if (transfer != null) {
      let accounts = transfer.accounts
      let instruction = transfer.instruction
      if (accounts != null || instruction != null) {
        let from = getOrCreateAccount(accounts!.source);
        let to = getOrCreateAccount(accounts!.destination);
        let amount = BigInt.fromU64(instruction!.amount);
        recordTransfer(transaction, event.instructionIndex, from, to, amount);
      }
    }
  })
}

function getOrCreateTransaction(event: Event): Transaction {
  let transaction = Transaction.load(event.txnId);
  if (transaction == null) {
    transaction = new Transaction(event.txnId);
    transaction.blockNumber = event.blockHeight as i32
    transaction.timestamp = event.blockTimestamp as i32
    transaction.save();
  }
  return transaction as Transaction;
}

function getOrCreateAccount(pubkey: string): Account {
  let account = Account.load(pubkey);
  if (account == null) {
    account = new Account(pubkey);
    account.balance = BigInt.fromI32(0)
    account.save();
  }
  return account as Account;
}

function recordTransfer(
  transaction: Transaction,
  instructionIndex: u64,
  from: Account,
  to: Account,
  value: BigInt
): void {
  let transfer = new Transfer(
    transaction.id + "-" + instructionIndex.toString()
  )
  transfer.transaction = transaction.id
  transfer.from = from.id
  transfer.to = to.id
  transfer.value = value
  transfer.save()
}