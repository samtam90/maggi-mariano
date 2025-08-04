import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Verbano-Cusio-Ossola",
  canonical: links.servizi["trasporto-acqua"]["verbano-cusio-ossola"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"}  
});