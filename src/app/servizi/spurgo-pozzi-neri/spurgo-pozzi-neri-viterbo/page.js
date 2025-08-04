import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Viterbo",
  canonical: links.servizi["spurgo-pozzi-neri"]["viterbo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});