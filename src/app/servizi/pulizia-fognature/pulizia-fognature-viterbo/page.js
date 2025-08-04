import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Viterbo",
  canonical: links.servizi["pulizia-fognature"]["viterbo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});
