// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";

export class RevokeInstruction {
  static encode(message: RevokeInstruction, writer: Writer): void {}

  static decode(reader: Reader, length: i32): RevokeInstruction {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RevokeInstruction();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}
