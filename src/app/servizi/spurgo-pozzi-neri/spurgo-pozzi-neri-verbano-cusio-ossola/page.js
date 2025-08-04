import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Verbano-Cusio-Ossola",
  canonical: links.servizi["spurgo-pozzi-neri"]["verbano-cusio-ossola"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"}  
});