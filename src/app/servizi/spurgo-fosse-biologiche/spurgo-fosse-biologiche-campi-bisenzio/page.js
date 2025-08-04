import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Campi Bisenzio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["campi-bisenzio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});
