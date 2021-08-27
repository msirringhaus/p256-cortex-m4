(function() {var implementors = {};
implementors["block_buffer"] = [{"text":"impl&lt;BlockSize&gt; Freeze for <a class=\"struct\" href=\"block_buffer/struct.BlockBuffer.html\" title=\"struct block_buffer::BlockBuffer\">BlockBuffer</a>&lt;BlockSize&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;BlockSize as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["block_buffer::BlockBuffer"]}];
implementors["crypto_bigint"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"crypto_bigint/struct.Checked.html\" title=\"struct crypto_bigint::Checked\">Checked</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["crypto_bigint::checked::Checked"]},{"text":"impl Freeze for <a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>","synthetic":true,"types":["crypto_bigint::limb::Limb"]},{"text":"impl&lt;const LIMBS:&nbsp;usize&gt; Freeze for <a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;","synthetic":true,"types":["crypto_bigint::uint::UInt"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["crypto_bigint::wrapping::Wrapping"]}];
implementors["crypto_mac"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"crypto_mac/struct.MacError.html\" title=\"struct crypto_mac::MacError\">MacError</a>","synthetic":true,"types":["crypto_mac::errors::MacError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"crypto_mac/struct.InvalidKeyLength.html\" title=\"struct crypto_mac::InvalidKeyLength\">InvalidKeyLength</a>","synthetic":true,"types":["crypto_mac::errors::InvalidKeyLength"]},{"text":"impl&lt;M&gt; Freeze for <a class=\"struct\" href=\"crypto_mac/struct.Output.html\" title=\"struct crypto_mac::Output\">Output</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;M as <a class=\"trait\" href=\"crypto_mac/trait.Mac.html\" title=\"trait crypto_mac::Mac\">Mac</a>&gt;::<a class=\"type\" href=\"crypto_mac/trait.Mac.html#associatedtype.OutputSize\" title=\"type crypto_mac::Mac::OutputSize\">OutputSize</a> as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["crypto_mac::Output"]}];
implementors["der"] = [{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.Any.html\" title=\"struct der::asn1::Any\">Any</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::any::Any"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.BitString.html\" title=\"struct der::asn1::BitString\">BitString</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::bit_string::BitString"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.ContextSpecific.html\" title=\"struct der::asn1::ContextSpecific\">ContextSpecific</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::context_specific::ContextSpecific"]},{"text":"impl Freeze for <a class=\"struct\" href=\"der/asn1/struct.GeneralizedTime.html\" title=\"struct der::asn1::GeneralizedTime\">GeneralizedTime</a>","synthetic":true,"types":["der::asn1::generalized_time::GeneralizedTime"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.Ia5String.html\" title=\"struct der::asn1::Ia5String\">Ia5String</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::ia5_string::Ia5String"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.UIntBytes.html\" title=\"struct der::asn1::UIntBytes\">UIntBytes</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::integer::bigint::UIntBytes"]},{"text":"impl Freeze for <a class=\"struct\" href=\"der/asn1/struct.Null.html\" title=\"struct der::asn1::Null\">Null</a>","synthetic":true,"types":["der::asn1::null::Null"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.OctetString.html\" title=\"struct der::asn1::OctetString\">OctetString</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::octet_string::OctetString"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.PrintableString.html\" title=\"struct der::asn1::PrintableString\">PrintableString</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::printable_string::PrintableString"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.SequenceIter.html\" title=\"struct der::asn1::SequenceIter\">SequenceIter</a>&lt;'a, T&gt;","synthetic":true,"types":["der::asn1::sequence::iter::SequenceIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.Sequence.html\" title=\"struct der::asn1::Sequence\">Sequence</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::sequence::Sequence"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.SetOfRef.html\" title=\"struct der::asn1::SetOfRef\">SetOfRef</a>&lt;'a, T&gt;","synthetic":true,"types":["der::asn1::set_of::SetOfRef"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.SetOfRefIter.html\" title=\"struct der::asn1::SetOfRefIter\">SetOfRefIter</a>&lt;'a, T&gt;","synthetic":true,"types":["der::asn1::set_of::SetOfRefIter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"der/asn1/struct.UtcTime.html\" title=\"struct der::asn1::UtcTime\">UtcTime</a>","synthetic":true,"types":["der::asn1::utc_time::UtcTime"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/asn1/struct.Utf8String.html\" title=\"struct der::asn1::Utf8String\">Utf8String</a>&lt;'a&gt;","synthetic":true,"types":["der::asn1::utf8_string::Utf8String"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/struct.Decoder.html\" title=\"struct der::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["der::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"der/struct.Encoder.html\" title=\"struct der::Encoder\">Encoder</a>&lt;'a&gt;","synthetic":true,"types":["der::encoder::Encoder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"der/struct.Error.html\" title=\"struct der::Error\">Error</a>","synthetic":true,"types":["der::error::Error"]},{"text":"impl Freeze for <a class=\"enum\" href=\"der/enum.ErrorKind.html\" title=\"enum der::ErrorKind\">ErrorKind</a>","synthetic":true,"types":["der::error::ErrorKind"]},{"text":"impl Freeze for <a class=\"struct\" href=\"der/struct.Header.html\" title=\"struct der::Header\">Header</a>","synthetic":true,"types":["der::header::Header"]},{"text":"impl Freeze for <a class=\"struct\" href=\"der/struct.Length.html\" title=\"struct der::Length\">Length</a>","synthetic":true,"types":["der::length::Length"]},{"text":"impl Freeze for <a class=\"enum\" href=\"der/enum.Class.html\" title=\"enum der::Class\">Class</a>","synthetic":true,"types":["der::tag::class::Class"]},{"text":"impl Freeze for <a class=\"struct\" href=\"der/struct.TagNumber.html\" title=\"struct der::TagNumber\">TagNumber</a>","synthetic":true,"types":["der::tag::number::TagNumber"]},{"text":"impl Freeze for <a class=\"enum\" href=\"der/enum.Tag.html\" title=\"enum der::Tag\">Tag</a>","synthetic":true,"types":["der::tag::Tag"]}];
implementors["digest"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"digest/struct.InvalidOutputSize.html\" title=\"struct digest::InvalidOutputSize\">InvalidOutputSize</a>","synthetic":true,"types":["digest::errors::InvalidOutputSize"]}];
implementors["ecdsa"] = [{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"ecdsa/der/struct.Signature.html\" title=\"struct ecdsa::der::Signature\">Signature</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a>&gt;&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html#associatedtype.Output\" title=\"type core::ops::arith::Add::Output\">Output</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;&gt;&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html#associatedtype.Output\" title=\"type core::ops::arith::Add::Output\">Output</a> as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["ecdsa::der::Signature"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"ecdsa/struct.SigningKey.html\" title=\"struct ecdsa::SigningKey\">SigningKey</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"elliptic_curve/arithmetic/trait.ScalarArithmetic.html\" title=\"trait elliptic_curve::arithmetic::ScalarArithmetic\">ScalarArithmetic</a>&gt;::<a class=\"type\" href=\"elliptic_curve/arithmetic/trait.ScalarArithmetic.html#associatedtype.Scalar\" title=\"type elliptic_curve::arithmetic::ScalarArithmetic::Scalar\">Scalar</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["ecdsa::sign::SigningKey"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"ecdsa/struct.VerifyingKey.html\" title=\"struct ecdsa::VerifyingKey\">VerifyingKey</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"elliptic_curve/arithmetic/trait.AffineArithmetic.html\" title=\"trait elliptic_curve::arithmetic::AffineArithmetic\">AffineArithmetic</a>&gt;::<a class=\"type\" href=\"elliptic_curve/arithmetic/trait.AffineArithmetic.html#associatedtype.AffinePoint\" title=\"type elliptic_curve::arithmetic::AffineArithmetic::AffinePoint\">AffinePoint</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["ecdsa::verify::VerifyingKey"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"ecdsa/struct.Signature.html\" title=\"struct ecdsa::Signature\">Signature</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a>&gt;&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html#associatedtype.Output\" title=\"type core::ops::arith::Add::Output\">Output</a> as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["ecdsa::Signature"]}];
implementors["elliptic_curve"] = [{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"elliptic_curve/sec1/struct.EncodedPoint.html\" title=\"struct elliptic_curve::sec1::EncodedPoint\">EncodedPoint</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a> as <a class=\"trait\" href=\"elliptic_curve/ops/trait.Add.html\" title=\"trait elliptic_curve::ops::Add\">Add</a>&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a>&gt;&gt;::<a class=\"type\" href=\"elliptic_curve/ops/trait.Add.html#associatedtype.Output\" title=\"type elliptic_curve::ops::Add::Output\">Output</a> as <a class=\"trait\" href=\"elliptic_curve/ops/trait.Add.html\" title=\"trait elliptic_curve::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>, <a class=\"struct\" href=\"elliptic_curve/consts/struct.B1.html\" title=\"struct elliptic_curve::consts::B1\">B1</a>&gt;&gt;&gt;::<a class=\"type\" href=\"elliptic_curve/ops/trait.Add.html#associatedtype.Output\" title=\"type elliptic_curve::ops::Add::Output\">Output</a> as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["elliptic_curve::sec1::EncodedPoint"]},{"text":"impl&lt;'a, C&gt; Freeze for <a class=\"enum\" href=\"elliptic_curve/sec1/enum.Coordinates.html\" title=\"enum elliptic_curve::sec1::Coordinates\">Coordinates</a>&lt;'a, C&gt;","synthetic":true,"types":["elliptic_curve::sec1::Coordinates"]},{"text":"impl Freeze for <a class=\"enum\" href=\"elliptic_curve/sec1/enum.Tag.html\" title=\"enum elliptic_curve::sec1::Tag\">Tag</a>","synthetic":true,"types":["elliptic_curve::sec1::Tag"]},{"text":"impl Freeze for <a class=\"struct\" href=\"elliptic_curve/struct.Error.html\" title=\"struct elliptic_curve::Error\">Error</a>","synthetic":true,"types":["elliptic_curve::error::Error"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"elliptic_curve/struct.ScalarBytes.html\" title=\"struct elliptic_curve::ScalarBytes\">ScalarBytes</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a> as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["elliptic_curve::scalar::bytes::ScalarBytes"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"elliptic_curve/struct.NonZeroScalar.html\" title=\"struct elliptic_curve::NonZeroScalar\">NonZeroScalar</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.ScalarArithmetic.html\" title=\"trait elliptic_curve::ScalarArithmetic\">ScalarArithmetic</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.ScalarArithmetic.html#associatedtype.Scalar\" title=\"type elliptic_curve::ScalarArithmetic::Scalar\">Scalar</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["elliptic_curve::scalar::non_zero::NonZeroScalar"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"elliptic_curve/struct.PublicKey.html\" title=\"struct elliptic_curve::PublicKey\">PublicKey</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.AffineArithmetic.html\" title=\"trait elliptic_curve::AffineArithmetic\">AffineArithmetic</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.AffineArithmetic.html#associatedtype.AffinePoint\" title=\"type elliptic_curve::AffineArithmetic::AffinePoint\">AffinePoint</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["elliptic_curve::public_key::PublicKey"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"elliptic_curve/ecdh/struct.EphemeralSecret.html\" title=\"struct elliptic_curve::ecdh::EphemeralSecret\">EphemeralSecret</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.ScalarArithmetic.html\" title=\"trait elliptic_curve::ScalarArithmetic\">ScalarArithmetic</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.ScalarArithmetic.html#associatedtype.Scalar\" title=\"type elliptic_curve::ScalarArithmetic::Scalar\">Scalar</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["elliptic_curve::ecdh::EphemeralSecret"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"elliptic_curve/ecdh/struct.SharedSecret.html\" title=\"struct elliptic_curve::ecdh::SharedSecret\">SharedSecret</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a> as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["elliptic_curve::ecdh::SharedSecret"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"elliptic_curve/struct.SecretKey.html\" title=\"struct elliptic_curve::SecretKey\">SecretKey</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;C as <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>&gt;::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a> as <a class=\"trait\" href=\"crypto_bigint/array/trait.ArrayEncoding.html\" title=\"trait crypto_bigint::array::ArrayEncoding\">ArrayEncoding</a>&gt;::<a class=\"type\" href=\"crypto_bigint/array/trait.ArrayEncoding.html#associatedtype.ByteSize\" title=\"type crypto_bigint::array::ArrayEncoding::ByteSize\">ByteSize</a> as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["elliptic_curve::secret_key::SecretKey"]}];
implementors["ff"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"ff/struct.BatchInverter.html\" title=\"struct ff::BatchInverter\">BatchInverter</a>","synthetic":true,"types":["ff::batch::BatchInverter"]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; Freeze for <a class=\"struct\" href=\"generic_array/iter/struct.GenericArrayIter.html\" title=\"struct generic_array::iter::GenericArrayIter\">GenericArrayIter</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["generic_array::iter::GenericArrayIter"]},{"text":"impl&lt;T, U&gt; Freeze for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["generic_array::GenericArray"]}];
implementors["hmac"] = [{"text":"impl&lt;D&gt; Freeze for <a class=\"struct\" href=\"hmac/struct.Hmac.html\" title=\"struct hmac::Hmac\">Hmac</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;D as <a class=\"trait\" href=\"digest/trait.BlockInput.html\" title=\"trait digest::BlockInput\">BlockInput</a>&gt;::<a class=\"type\" href=\"digest/trait.BlockInput.html#associatedtype.BlockSize\" title=\"type digest::BlockInput::BlockSize\">BlockSize</a> as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["hmac::Hmac"]}];
implementors["p256"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"p256/struct.AffinePoint.html\" title=\"struct p256::AffinePoint\">AffinePoint</a>","synthetic":true,"types":["p256::arithmetic::affine::AffinePoint"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256/struct.ProjectivePoint.html\" title=\"struct p256::ProjectivePoint\">ProjectivePoint</a>","synthetic":true,"types":["p256::arithmetic::projective::ProjectivePoint"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256/struct.BlindedScalar.html\" title=\"struct p256::BlindedScalar\">BlindedScalar</a>","synthetic":true,"types":["p256::arithmetic::scalar::blinding::BlindedScalar"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>","synthetic":true,"types":["p256::arithmetic::scalar::Scalar"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256/struct.NistP256.html\" title=\"struct p256::NistP256\">NistP256</a>","synthetic":true,"types":["p256::NistP256"]}];
implementors["p256_cortex_m4"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"p256_cortex_m4/struct.SecretKey.html\" title=\"struct p256_cortex_m4::SecretKey\">SecretKey</a>","synthetic":true,"types":["p256_cortex_m4::cortex_m4::SecretKey"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256_cortex_m4/struct.PublicKey.html\" title=\"struct p256_cortex_m4::PublicKey\">PublicKey</a>","synthetic":true,"types":["p256_cortex_m4::cortex_m4::PublicKey"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256_cortex_m4/struct.Keypair.html\" title=\"struct p256_cortex_m4::Keypair\">Keypair</a>","synthetic":true,"types":["p256_cortex_m4::cortex_m4::Keypair"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256_cortex_m4/struct.Signature.html\" title=\"struct p256_cortex_m4::Signature\">Signature</a>","synthetic":true,"types":["p256_cortex_m4::cortex_m4::Signature"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256_cortex_m4/struct.SharedSecret.html\" title=\"struct p256_cortex_m4::SharedSecret\">SharedSecret</a>","synthetic":true,"types":["p256_cortex_m4::cortex_m4::SharedSecret"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256_cortex_m4/struct.Error.html\" title=\"struct p256_cortex_m4::Error\">Error</a>","synthetic":true,"types":["p256_cortex_m4::Error"]}];
implementors["p256_cortex_m4_sys"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"p256_cortex_m4_sys/struct.max_align_t.html\" title=\"struct p256_cortex_m4_sys::max_align_t\">max_align_t</a>","synthetic":true,"types":["p256_cortex_m4_sys::max_align_t"]},{"text":"impl Freeze for <a class=\"struct\" href=\"p256_cortex_m4_sys/struct.SignPrecomp.html\" title=\"struct p256_cortex_m4_sys::SignPrecomp\">SignPrecomp</a>","synthetic":true,"types":["p256_cortex_m4_sys::SignPrecomp"]}];
implementors["rand_core"] = [{"text":"impl&lt;R:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"rand_core/block/struct.BlockRng.html\" title=\"struct rand_core::block::BlockRng\">BlockRng</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as <a class=\"trait\" href=\"rand_core/block/trait.BlockRngCore.html\" title=\"trait rand_core::block::BlockRngCore\">BlockRngCore</a>&gt;::<a class=\"type\" href=\"rand_core/block/trait.BlockRngCore.html#associatedtype.Results\" title=\"type rand_core::block::BlockRngCore::Results\">Results</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["rand_core::block::BlockRng"]},{"text":"impl&lt;R:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"rand_core/block/struct.BlockRng64.html\" title=\"struct rand_core::block::BlockRng64\">BlockRng64</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as <a class=\"trait\" href=\"rand_core/block/trait.BlockRngCore.html\" title=\"trait rand_core::block::BlockRngCore\">BlockRngCore</a>&gt;::<a class=\"type\" href=\"rand_core/block/trait.BlockRngCore.html#associatedtype.Results\" title=\"type rand_core::block::BlockRngCore::Results\">Results</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["rand_core::block::BlockRng64"]},{"text":"impl Freeze for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>","synthetic":true,"types":["rand_core::error::Error"]}];
implementors["sha2"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"sha2/struct.Sha256.html\" title=\"struct sha2::Sha256\">Sha256</a>","synthetic":true,"types":["sha2::sha256::Sha256"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sha2/struct.Sha224.html\" title=\"struct sha2::Sha224\">Sha224</a>","synthetic":true,"types":["sha2::sha256::Sha224"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sha2/struct.Sha512.html\" title=\"struct sha2::Sha512\">Sha512</a>","synthetic":true,"types":["sha2::sha512::Sha512"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sha2/struct.Sha384.html\" title=\"struct sha2::Sha384\">Sha384</a>","synthetic":true,"types":["sha2::sha512::Sha384"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sha2/struct.Sha512Trunc256.html\" title=\"struct sha2::Sha512Trunc256\">Sha512Trunc256</a>","synthetic":true,"types":["sha2::sha512::Sha512Trunc256"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sha2/struct.Sha512Trunc224.html\" title=\"struct sha2::Sha512Trunc224\">Sha512Trunc224</a>","synthetic":true,"types":["sha2::sha512::Sha512Trunc224"]}];
implementors["signature"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"signature/struct.Error.html\" title=\"struct signature::Error\">Error</a>","synthetic":true,"types":["signature::error::Error"]}];
implementors["subtle"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"subtle/struct.Choice.html\" title=\"struct subtle::Choice\">Choice</a>","synthetic":true,"types":["subtle::Choice"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"subtle/struct.CtOption.html\" title=\"struct subtle::CtOption\">CtOption</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["subtle::CtOption"]}];
implementors["typenum"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":true,"types":["typenum::bit::B0"]},{"text":"impl Freeze for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":true,"types":["typenum::bit::B1"]},{"text":"impl&lt;U&gt; Freeze for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["typenum::int::PInt"]},{"text":"impl&lt;U&gt; Freeze for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["typenum::int::NInt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>","synthetic":true,"types":["typenum::int::Z0"]},{"text":"impl Freeze for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":true,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;U, B&gt; Freeze for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["typenum::uint::UInt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>","synthetic":true,"types":["typenum::array::ATerm"]},{"text":"impl&lt;V, A&gt; Freeze for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["typenum::array::TArr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"typenum/struct.Greater.html\" title=\"struct typenum::Greater\">Greater</a>","synthetic":true,"types":["typenum::Greater"]},{"text":"impl Freeze for <a class=\"struct\" href=\"typenum/struct.Less.html\" title=\"struct typenum::Less\">Less</a>","synthetic":true,"types":["typenum::Less"]},{"text":"impl Freeze for <a class=\"struct\" href=\"typenum/struct.Equal.html\" title=\"struct typenum::Equal\">Equal</a>","synthetic":true,"types":["typenum::Equal"]}];
implementors["zeroize"] = [{"text":"impl&lt;Z&gt; Freeze for <a class=\"struct\" href=\"zeroize/struct.Zeroizing.html\" title=\"struct zeroize::Zeroizing\">Zeroizing</a>&lt;Z&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Z: Freeze,&nbsp;</span>","synthetic":true,"types":["zeroize::Zeroizing"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()