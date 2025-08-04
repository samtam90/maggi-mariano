import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castelfranco Piandiscò",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"}  
});