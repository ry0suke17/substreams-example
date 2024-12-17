// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { BurnInstruction } from "./Burn/BurnInstruction";
import { BurnAccounts } from "./Burn/BurnAccounts";

export class Burn {
  static encode(message: Burn, writer: Writer): void {
    const instruction = message.instruction;
    if (instruction !== null) {
      writer.uint32(10);
      writer.fork();
      BurnInstruction.encode(instruction, writer);
      writer.ldelim();
    }

    const accounts = message.accounts;
    if (accounts !== null) {
      writer.uint32(18);
      writer.fork();
      BurnAccounts.encode(accounts, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Burn {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Burn();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruction = BurnInstruction.decode(reader, reader.uint32());
          break;

        case 2:
          message.accounts = BurnAccounts.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  instruction: BurnInstruction | null;
  accounts: BurnAccounts | null;

  constructor(
    instruction: BurnInstruction | null = null,
    accounts: BurnAccounts | null = null
  ) {
    this.instruction = instruction;
    this.accounts = accounts;
  }
}
