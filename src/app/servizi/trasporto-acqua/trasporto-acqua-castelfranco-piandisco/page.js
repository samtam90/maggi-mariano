import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Castelfranco Piandiscò",
});
export default withBaseProps({ 
    title: "Trasporto acqua Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"}  
});