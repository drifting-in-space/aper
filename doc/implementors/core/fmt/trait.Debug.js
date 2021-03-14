(function() {var implementors = {};
implementors["aper"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/data_structures/struct.Atom.html\" title=\"struct aper::data_structures::Atom\">Atom</a>&lt;T&gt;","synthetic":false,"types":["aper::data_structures::atom::Atom"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/data_structures/struct.ReplaceAtom.html\" title=\"struct aper::data_structures::ReplaceAtom\">ReplaceAtom</a>&lt;T&gt;","synthetic":false,"types":["aper::data_structures::atom::ReplaceAtom"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/data_structures/struct.Constant.html\" title=\"struct aper::data_structures::Constant\">Constant</a>&lt;T&gt;","synthetic":false,"types":["aper::data_structures::constant::Constant"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/trait.StateMachine.html\" title=\"trait aper::StateMachine\">StateMachine</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/data_structures/struct.List.html\" title=\"struct aper::data_structures::List\">List</a>&lt;T&gt;","synthetic":false,"types":["aper::data_structures::list::List"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/data_structures/struct.ZenoIndex.html\" title=\"struct aper::data_structures::ZenoIndex\">ZenoIndex</a>","synthetic":false,"types":["aper::data_structures::zeno_index::ZenoIndex"]},{"text":"impl&lt;SM:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/trait.StateMachine.html\" title=\"trait aper::StateMachine\">StateMachine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/struct.StateMachineContainerProgram.html\" title=\"struct aper::StateMachineContainerProgram\">StateMachineContainerProgram</a>&lt;SM&gt;","synthetic":false,"types":["aper::state_program::StateMachineContainerProgram"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/struct.PlayerID.html\" title=\"struct aper::PlayerID\">PlayerID</a>","synthetic":false,"types":["aper::PlayerID"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/struct.TransitionEvent.html\" title=\"struct aper::TransitionEvent\">TransitionEvent</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"aper/trait.Transition.html\" title=\"trait aper::Transition\">Transition</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["aper::TransitionEvent"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/trait.Transition.html\" title=\"trait aper::Transition\">Transition</a>, State:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/trait.StateProgram.html\" title=\"trait aper::StateProgram\">StateProgram</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"aper/enum.StateUpdateMessage.html\" title=\"enum aper::StateUpdateMessage\">StateUpdateMessage</a>&lt;T, State&gt;","synthetic":false,"types":["aper::StateUpdateMessage"]}];
implementors["aper_yew"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/state_machine/trait.Transition.html\" title=\"trait aper::state_machine::Transition\">Transition</a>, State:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/state_program/trait.StateProgram.html\" title=\"trait aper::state_program::StateProgram\">StateProgram</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"aper_yew/enum.Status.html\" title=\"enum aper_yew::Status\">Status</a>&lt;T, State&gt;","synthetic":false,"types":["aper_yew::Status"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/state_machine/trait.Transition.html\" title=\"trait aper::state_machine::Transition\">Transition</a>, State:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/state_program/trait.StateProgram.html\" title=\"trait aper::state_program::StateProgram\">StateProgram</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"aper_yew/enum.Msg.html\" title=\"enum aper_yew::Msg\">Msg</a>&lt;T, State&gt;","synthetic":false,"types":["aper_yew::Msg"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()