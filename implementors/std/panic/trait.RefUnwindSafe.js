(function() {var implementors = {};
implementors["aper"] = [{"text":"impl&lt;Transition&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper/struct.SuspendedEvent.html\" title=\"struct aper::SuspendedEvent\">SuspendedEvent</a>&lt;Transition&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transition: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["aper::suspended_event::SuspendedEvent"]},{"text":"impl&lt;Transition&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper/struct.TransitionEvent.html\" title=\"struct aper::TransitionEvent\">TransitionEvent</a>&lt;Transition&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transition: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["aper::transition_event::TransitionEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper/struct.PlayerID.html\" title=\"struct aper::PlayerID\">PlayerID</a>","synthetic":true,"types":["aper::PlayerID"]},{"text":"impl&lt;State&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"aper/enum.StateUpdateMessage.html\" title=\"enum aper::StateUpdateMessage\">StateUpdateMessage</a>&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as <a class=\"trait\" href=\"aper/trait.StateMachine.html\" title=\"trait aper::StateMachine\">StateMachine</a>&gt;::<a class=\"type\" href=\"aper/trait.StateMachine.html#associatedtype.Transition\" title=\"type aper::StateMachine::Transition\">Transition</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["aper::StateUpdateMessage"]}];
implementors["aper_actix"] = [{"text":"impl&lt;State&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_actix/struct.ChannelActor.html\" title=\"struct aper_actix::ChannelActor\">ChannelActor</a>&lt;State&gt;","synthetic":true,"types":["aper_actix::channel_actor::ChannelActor"]},{"text":"impl&lt;State&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_actix/struct.WrappedStateUpdateMessage.html\" title=\"struct aper_actix::WrappedStateUpdateMessage\">WrappedStateUpdateMessage</a>&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as <a class=\"trait\" href=\"aper/state_machine/trait.StateMachine.html\" title=\"trait aper::state_machine::StateMachine\">StateMachine</a>&gt;::<a class=\"type\" href=\"aper/state_machine/trait.StateMachine.html#associatedtype.Transition\" title=\"type aper::state_machine::StateMachine::Transition\">Transition</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["aper_actix::messages::WrappedStateUpdateMessage"]},{"text":"impl&lt;State&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"aper_actix/enum.ChannelMessage.html\" title=\"enum aper_actix::ChannelMessage\">ChannelMessage</a>&lt;State&gt;","synthetic":true,"types":["aper_actix::messages::ChannelMessage"]},{"text":"impl&lt;State&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_actix/struct.PlayerActor.html\" title=\"struct aper_actix::PlayerActor\">PlayerActor</a>&lt;State&gt;","synthetic":true,"types":["aper_actix::player_actor::PlayerActor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_actix/struct.CreateChannelMessage.html\" title=\"struct aper_actix::CreateChannelMessage\">CreateChannelMessage</a>","synthetic":true,"types":["aper_actix::server_actor::CreateChannelMessage"]},{"text":"impl&lt;State&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_actix/struct.GetChannelMessage.html\" title=\"struct aper_actix::GetChannelMessage\">GetChannelMessage</a>&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["aper_actix::server_actor::GetChannelMessage"]},{"text":"impl&lt;State, Factory&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_actix/struct.ServerActor.html\" title=\"struct aper_actix::ServerActor\">ServerActor</a>&lt;State, Factory&gt;","synthetic":true,"types":["aper_actix::server_actor::ServerActor"]}];
implementors["aper_yew"] = [{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_yew/struct.UpdateInterval.html\" title=\"struct aper_yew::UpdateInterval\">UpdateInterval</a>","synthetic":true,"types":["aper_yew::update_interval::UpdateInterval"]},{"text":"impl&lt;View&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_yew/struct.Props.html\" title=\"struct aper_yew::Props\">Props</a>&lt;View&gt;","synthetic":true,"types":["aper_yew::Props"]},{"text":"impl&lt;State&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"aper_yew/enum.Status.html\" title=\"enum aper_yew::Status\">Status</a>&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["aper_yew::Status"]},{"text":"impl&lt;State&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"aper_yew/enum.Msg.html\" title=\"enum aper_yew::Msg\">Msg</a>&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as <a class=\"trait\" href=\"aper/state_machine/trait.StateMachine.html\" title=\"trait aper::state_machine::StateMachine\">StateMachine</a>&gt;::<a class=\"type\" href=\"aper/state_machine/trait.StateMachine.html#associatedtype.Transition\" title=\"type aper::state_machine::StateMachine::Transition\">Transition</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["aper_yew::Msg"]},{"text":"impl&lt;View&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_yew/struct.StateMachineComponent.html\" title=\"struct aper_yew::StateMachineComponent\">StateMachineComponent</a>&lt;View&gt;","synthetic":true,"types":["aper_yew::StateMachineComponent"]},{"text":"impl&lt;State&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"aper_yew/struct.ViewContext.html\" title=\"struct aper_yew::ViewContext\">ViewContext</a>&lt;State&gt;","synthetic":true,"types":["aper_yew::ViewContext"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()