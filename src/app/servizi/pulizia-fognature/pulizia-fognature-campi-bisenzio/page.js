import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Campi Bisenzio",
  canonical: links.servizi["pulizia-fognature"]["campi-bisenzio"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});
