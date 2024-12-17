// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { AuthorityType } from "./AuthorityType";

export class SetAuthorityInstruction {
  static encode(message: SetAuthorityInstruction, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.authorityType);

    writer.uint32(18);
    writer.string(message.newAuthority);
  }

  static decode(reader: Reader, length: i32): SetAuthorityInstruction {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SetAuthorityInstruction();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorityType = reader.int32();
          break;

        case 2:
          message.newAuthority = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  authorityType: AuthorityType;
  newAuthority: string;

  constructor(authorityType: AuthorityType = 0, newAuthority: string = "") {
    this.authorityType = authorityType;
    this.newAuthority = newAuthority;
  }
}