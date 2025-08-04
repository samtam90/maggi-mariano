import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castelfranco Piandiscò",
  canonical: links.servizi["trasporto-rifiuti"]["castelfranco-piandisco"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"}  
});