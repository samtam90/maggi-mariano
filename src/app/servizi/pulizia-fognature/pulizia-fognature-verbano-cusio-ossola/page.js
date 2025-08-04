import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Verbano-Cusio-Ossola",
  canonical: links.servizi["pulizia-fognature"]["verbano-cusio-ossola"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"}  
});
