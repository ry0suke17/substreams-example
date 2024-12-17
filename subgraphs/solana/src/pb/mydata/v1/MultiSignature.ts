// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";

export class MultiSignature {
  static encode(message: MultiSignature, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.multisigAccount);

    const signers = message.signers;
    if (signers.length !== 0) {
      for (let i: i32 = 0; i < signers.length; ++i) {
        writer.uint32(18);
        writer.string(signers[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): MultiSignature {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MultiSignature();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.multisigAccount = reader.string();
          break;

        case 2:
          message.signers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  multisigAccount: string;
  signers: Array<string>;

  constructor(multisigAccount: string = "", signers: Array<string> = []) {
    this.multisigAccount = multisigAccount;
    this.signers = signers;
  }
}
