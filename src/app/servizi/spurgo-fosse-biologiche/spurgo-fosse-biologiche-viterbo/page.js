import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Viterbo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["viterbo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});
