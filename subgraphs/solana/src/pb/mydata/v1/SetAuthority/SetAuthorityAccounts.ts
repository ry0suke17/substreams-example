// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";

export class SetAuthorityAccounts {
  static encode(message: SetAuthorityAccounts, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.account);

    writer.uint32(18);
    writer.string(message.currentAuthority);
  }

  static decode(reader: Reader, length: i32): SetAuthorityAccounts {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SetAuthorityAccounts();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.currentAuthority = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  account: string;
  currentAuthority: string;

  constructor(account: string = "", currentAuthority: string = "") {
    this.account = account;
    this.currentAuthority = currentAuthority;
  }
}