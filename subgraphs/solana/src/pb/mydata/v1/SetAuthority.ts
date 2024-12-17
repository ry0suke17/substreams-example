// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { SetAuthorityInstruction } from "./SetAuthority/SetAuthorityInstruction";
import { SetAuthorityAccounts } from "./SetAuthority/SetAuthorityAccounts";

export class SetAuthority {
  static encode(message: SetAuthority, writer: Writer): void {
    const instruction = message.instruction;
    if (instruction !== null) {
      writer.uint32(10);
      writer.fork();
      SetAuthorityInstruction.encode(instruction, writer);
      writer.ldelim();
    }

    const accounts = message.accounts;
    if (accounts !== null) {
      writer.uint32(18);
      writer.fork();
      SetAuthorityAccounts.encode(accounts, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SetAuthority {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SetAuthority();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruction = SetAuthorityInstruction.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.accounts = SetAuthorityAccounts.decode(
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

  instruction: SetAuthorityInstruction | null;
  accounts: SetAuthorityAccounts | null;

  constructor(
    instruction: SetAuthorityInstruction | null = null,
    accounts: SetAuthorityAccounts | null = null
  ) {
    this.instruction = instruction;
    this.accounts = accounts;
  }
}
