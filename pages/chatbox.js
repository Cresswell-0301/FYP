import Script from "next/script";

export default function ChatBox (){
    return (
        <div>
            <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
            <div class="elfsight-app-d357eb6f-d7b1-405f-8bdf-7768f7f921c0" data-elfsight-app-lazy></div>
        </div>
    )
}