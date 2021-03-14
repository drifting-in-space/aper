(function() {var implementors = {};
implementors["aper"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"aper/data_structures/struct.Atom.html\" title=\"struct aper::data_structures::Atom\">Atom</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper::data_structures::atom::Atom"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"aper/data_structures/struct.ReplaceAtom.html\" title=\"struct aper::data_structures::ReplaceAtom\">ReplaceAtom</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper::data_structures::atom::ReplaceAtom"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"aper/data_structures/struct.Constant.html\" title=\"struct aper::data_structures::Constant\">Constant</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper::data_structures::constant::Constant"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"aper/data_structures/struct.List.html\" title=\"struct aper::data_structures::List\">List</a>&lt;T&gt;","synthetic":true,"types":["aper::data_structures::list::List"]},{"text":"impl Freeze for <a class=\"struct\" href=\"aper/data_structures/struct.ZenoIndex.html\" title=\"struct aper::data_structures::ZenoIndex\">ZenoIndex</a>","synthetic":true,"types":["aper::data_structures::zeno_index::ZenoIndex"]},{"text":"impl&lt;SM&gt; Freeze for <a class=\"struct\" href=\"aper/struct.StateMachineContainerProgram.html\" title=\"struct aper::StateMachineContainerProgram\">StateMachineContainerProgram</a>&lt;SM&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SM: Freeze,&nbsp;</span>","synthetic":true,"types":["aper::state_program::StateMachineContainerProgram"]},{"text":"impl Freeze for <a class=\"struct\" href=\"aper/struct.PlayerID.html\" title=\"struct aper::PlayerID\">PlayerID</a>","synthetic":true,"types":["aper::PlayerID"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"aper/struct.TransitionEvent.html\" title=\"struct aper::TransitionEvent\">TransitionEvent</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper::TransitionEvent"]},{"text":"impl&lt;T, State&gt; Freeze for <a class=\"enum\" href=\"aper/enum.StateUpdateMessage.html\" title=\"enum aper::StateUpdateMessage\">StateUpdateMessage</a>&lt;T, State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper::StateUpdateMessage"]}];
implementors["aper_actix"] = [{"text":"impl&lt;T, State&gt; Freeze for <a class=\"struct\" href=\"aper_actix/struct.ChannelActor.html\" title=\"struct aper_actix::ChannelActor\">ChannelActor</a>&lt;T, State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper_actix::channel_actor::ChannelActor"]},{"text":"impl&lt;T, State&gt; Freeze for <a class=\"struct\" href=\"aper_actix/struct.WrappedStateUpdateMessage.html\" title=\"struct aper_actix::WrappedStateUpdateMessage\">WrappedStateUpdateMessage</a>&lt;T, State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper_actix::messages::WrappedStateUpdateMessage"]},{"text":"impl&lt;T, State&gt; Freeze for <a class=\"enum\" href=\"aper_actix/enum.ChannelMessage.html\" title=\"enum aper_actix::ChannelMessage\">ChannelMessage</a>&lt;T, State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper_actix::messages::ChannelMessage"]},{"text":"impl&lt;T, State&gt; Freeze for <a class=\"struct\" href=\"aper_actix/struct.PlayerActor.html\" title=\"struct aper_actix::PlayerActor\">PlayerActor</a>&lt;T, State&gt;","synthetic":true,"types":["aper_actix::player_actor::PlayerActor"]},{"text":"impl&lt;T, State&gt; Freeze for <a class=\"struct\" href=\"aper_actix/struct.ServerBuilder.html\" title=\"struct aper_actix::ServerBuilder\">ServerBuilder</a>&lt;T, State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: Freeze,&nbsp;</span>","synthetic":true,"types":["aper_actix::serve::ServerBuilder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"aper_actix/struct.CreateChannelMessage.html\" title=\"struct aper_actix::CreateChannelMessage\">CreateChannelMessage</a>","synthetic":true,"types":["aper_actix::server_actor::CreateChannelMessage"]},{"text":"impl&lt;T, State&gt; Freeze for <a class=\"struct\" href=\"aper_actix/struct.GetChannelMessage.html\" title=\"struct aper_actix::GetChannelMessage\">GetChannelMessage</a>&lt;T, State&gt;","synthetic":true,"types":["aper_actix::server_actor::GetChannelMessage"]},{"text":"impl&lt;T, State, Factory&gt; Freeze for <a class=\"struct\" href=\"aper_actix/struct.ServerActor.html\" title=\"struct aper_actix::ServerActor\">ServerActor</a>&lt;T, State, Factory&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Factory: Freeze,&nbsp;</span>","synthetic":true,"types":["aper_actix::server_actor::ServerActor"]}];
implementors["aper_yew"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"aper_yew/struct.UpdateInterval.html\" title=\"struct aper_yew::UpdateInterval\">UpdateInterval</a>","synthetic":true,"types":["aper_yew::update_interval::UpdateInterval"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"aper_yew/struct.ViewContext.html\" title=\"struct aper_yew::ViewContext\">ViewContext</a>&lt;T&gt;","synthetic":true,"types":["aper_yew::view::ViewContext"]},{"text":"impl&lt;V&gt; Freeze for <a class=\"struct\" href=\"aper_yew/struct.Props.html\" title=\"struct aper_yew::Props\">Props</a>&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["aper_yew::Props"]},{"text":"impl&lt;T, State&gt; Freeze for <a class=\"enum\" href=\"aper_yew/enum.Status.html\" title=\"enum aper_yew::Status\">Status</a>&lt;T, State&gt;","synthetic":true,"types":["aper_yew::Status"]},{"text":"impl&lt;T, State&gt; Freeze for <a class=\"enum\" href=\"aper_yew/enum.Msg.html\" title=\"enum aper_yew::Msg\">Msg</a>&lt;T, State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["aper_yew::Msg"]},{"text":"impl&lt;T, Program, V&gt; Freeze for <a class=\"struct\" href=\"aper_yew/struct.StateProgramComponent.html\" title=\"struct aper_yew::StateProgramComponent\">StateProgramComponent</a>&lt;T, Program, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["aper_yew::StateProgramComponent"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()