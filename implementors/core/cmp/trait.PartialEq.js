(function() {var implementors = {};
implementors["aper"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"aper/data_structures/struct.Atom.html\" title=\"struct aper::data_structures::Atom\">Atom</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"aper/data_structures/struct.Atom.html\" title=\"struct aper::data_structures::Atom\">Atom</a>&lt;T&gt;","synthetic":false,"types":["aper::data_structures::atom::Atom"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"aper/data_structures/struct.ReplaceAtom.html\" title=\"struct aper::data_structures::ReplaceAtom\">ReplaceAtom</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"aper/data_structures/struct.ReplaceAtom.html\" title=\"struct aper::data_structures::ReplaceAtom\">ReplaceAtom</a>&lt;T&gt;","synthetic":false,"types":["aper::data_structures::atom::ReplaceAtom"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"aper/data_structures/struct.List.html\" title=\"struct aper::data_structures::List\">List</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"aper/data_structures/struct.List.html\" title=\"struct aper::data_structures::List\">List</a>&lt;T&gt;","synthetic":false,"types":["aper::data_structures::list::List"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"aper/data_structures/struct.ZenoIndex.html\" title=\"struct aper::data_structures::ZenoIndex\">ZenoIndex</a>&gt; for <a class=\"struct\" href=\"aper/data_structures/struct.ZenoIndex.html\" title=\"struct aper::data_structures::ZenoIndex\">ZenoIndex</a>","synthetic":false,"types":["aper::data_structures::zeno_index::ZenoIndex"]},{"text":"impl&lt;Transition:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"aper/struct.SuspendedEvent.html\" title=\"struct aper::SuspendedEvent\">SuspendedEvent</a>&lt;Transition&gt;&gt; for <a class=\"struct\" href=\"aper/struct.SuspendedEvent.html\" title=\"struct aper::SuspendedEvent\">SuspendedEvent</a>&lt;Transition&gt;","synthetic":false,"types":["aper::suspended_event::SuspendedEvent"]},{"text":"impl&lt;Transition:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"aper/struct.TransitionEvent.html\" title=\"struct aper::TransitionEvent\">TransitionEvent</a>&lt;Transition&gt;&gt; for <a class=\"struct\" href=\"aper/struct.TransitionEvent.html\" title=\"struct aper::TransitionEvent\">TransitionEvent</a>&lt;Transition&gt;","synthetic":false,"types":["aper::transition_event::TransitionEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"aper/struct.PlayerID.html\" title=\"struct aper::PlayerID\">PlayerID</a>&gt; for <a class=\"struct\" href=\"aper/struct.PlayerID.html\" title=\"struct aper::PlayerID\">PlayerID</a>","synthetic":false,"types":["aper::PlayerID"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()