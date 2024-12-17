// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { InitializeMultisigInstruction } from "./InitializeMultisig/InitializeMultisigInstruction";
import { InitializeMultisigAccounts } from "./InitializeMultisig/InitializeMultisigAccounts";
import { InitializeMultisigVersion } from "./InitializeMultisig/InitializeMultisigVersion";

export class InitializeMultisig {
  static encode(message: InitializeMultisig, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.version);

    const instruction = message.instruction;
    if (instruction !== null) {
      writer.uint32(18);
      writer.fork();
      InitializeMultisigInstruction.encode(instruction, writer);
      writer.ldelim();
    }

    const accounts = message.accounts;
    if (accounts !== null) {
      writer.uint32(26);
      writer.fork();
      InitializeMultisigAccounts.encode(accounts, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): InitializeMultisig {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InitializeMultisig();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int32();
          break;

        case 2:
          message.instruction = InitializeMultisigInstruction.decode(
            reader,
            reader.uint32()
          );
          break;

        case 3:
          message.accounts = InitializeMultisigAccounts.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  version: InitializeMultisigVersion;
  instruction: InitializeMultisigInstruction | null;
  accounts: InitializeMultisigAccounts | null;

  constructor(
    version: InitializeMultisigVersion = 0,
    instruction: InitializeMultisigInstruction | null = null,
    accounts: InitializeMultisigAccounts | null = null
  ) {
    this.version = version;
    this.instruction = instruction;
    this.accounts = accounts;
  }
}
