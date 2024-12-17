// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { Signer } from "../Signer";

export class CloseAccountAccounts {
  static encode(message: CloseAccountAccounts, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.account);

    writer.uint32(18);
    writer.string(message.destination);

    const signer = message.signer;
    if (signer !== null) {
      writer.uint32(26);
      writer.fork();
      Signer.encode(signer, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CloseAccountAccounts {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CloseAccountAccounts();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.destination = reader.string();
          break;

        case 3:
          message.signer = Signer.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  account: string;
  destination: string;
  signer: Signer | null;

  constructor(
    account: string = "",
    destination: string = "",
    signer: Signer | null = null
  ) {
    this.account = account;
    this.destination = destination;
    this.signer = signer;
  }
}
