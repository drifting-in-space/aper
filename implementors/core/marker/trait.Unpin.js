(function() {var implementors = {};
implementors["aper"] = [{"text":"impl&lt;Transition&gt; Unpin for SuspendedEvent&lt;Transition&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transition: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Transition&gt; Unpin for TransitionEvent&lt;Transition&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transition: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for PlayerID","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for StateUpdateMessage&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as StateMachine&gt;::Transition: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["aper_actix"] = [{"text":"impl&lt;State&gt; Unpin for ChannelActor&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as StateMachine&gt;::Transition: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for WrappedStateUpdateMessage&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as StateMachine&gt;::Transition: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for PlayerActor&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for CreateChannelMessage","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for GetChannelMessage&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for ServerActor&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for ChannelMessage&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as StateMachine&gt;::Transition: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["aper_yew"] = [{"text":"impl Unpin for UpdateInterval","synthetic":true,"types":[]},{"text":"impl&lt;View&gt; Unpin for Props&lt;View&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;View: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;View&gt; Unpin for StateMachineComponent&lt;View&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;View: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for ViewContext&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for Status&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; Unpin for Msg&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as StateMachine&gt;::Transition: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()