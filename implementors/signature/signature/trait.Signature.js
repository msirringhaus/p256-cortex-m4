(function() {var implementors = {};
implementors["ecdsa"] = [{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"signature/signature/trait.Signature.html\" title=\"trait signature::signature::Signature\">Signature</a> for <a class=\"struct\" href=\"ecdsa/asn1/struct.Signature.html\" title=\"struct ecdsa::asn1::Signature\">Signature</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"ecdsa/trait.Curve.html\" title=\"trait ecdsa::Curve\">Curve</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.FieldSize\" title=\"type elliptic_curve::Curve::FieldSize\">FieldSize</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> + <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"ecdsa/asn1/type.MaxSize.html\" title=\"type ecdsa::asn1::MaxSize\">MaxSize</a>&lt;C&gt;: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C::<a class=\"type\" href=\"elliptic_curve/trait.Curve.html#associatedtype.FieldSize\" title=\"type elliptic_curve::Curve::FieldSize\">FieldSize</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html#associatedtype.Output\" title=\"type core::ops::arith::Add::Output\">Output</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"type\" href=\"ecdsa/asn1/type.MaxOverhead.html\" title=\"type ecdsa::asn1::MaxOverhead\">MaxOverhead</a>&gt; + <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":["ecdsa::asn1::Signature"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"signature/signature/trait.Signature.html\" title=\"trait signature::signature::Signature\">Signature</a> for <a class=\"struct\" href=\"ecdsa/struct.Signature.html\" title=\"struct ecdsa::Signature\">Signature</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"ecdsa/trait.Curve.html\" title=\"trait ecdsa::Curve\">Curve</a> + <a class=\"trait\" href=\"ecdsa/trait.CheckSignatureBytes.html\" title=\"trait ecdsa::CheckSignatureBytes\">CheckSignatureBytes</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"ecdsa/type.SignatureSize.html\" title=\"type ecdsa::SignatureSize\">SignatureSize</a>&lt;C&gt;: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":["ecdsa::Signature"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()