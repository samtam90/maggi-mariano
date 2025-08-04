import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Campi Bisenzio",
  canonical: links.servizi["spurgo-pozzi-neri"]["campi-bisenzio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});