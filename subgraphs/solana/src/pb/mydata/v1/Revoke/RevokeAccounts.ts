// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { Signer } from "../Signer";

export class RevokeAccounts {
  static encode(message: RevokeAccounts, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.source);

    const signer = message.signer;
    if (signer !== null) {
      writer.uint32(18);
      writer.fork();
      Signer.encode(signer, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): RevokeAccounts {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RevokeAccounts();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;

        case 2:
          message.signer = Signer.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  source: string;
  signer: Signer | null;

  constructor(source: string = "", signer: Signer | null = null) {
    this.source = source;
    this.signer = signer;
  }
}