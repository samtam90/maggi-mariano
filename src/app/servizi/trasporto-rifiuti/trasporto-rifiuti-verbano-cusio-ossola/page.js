import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Verbano-Cusio-Ossola",
  canonical: links.servizi["trasporto-rifiuti"]["verbano-cusio-ossola"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"}  
});