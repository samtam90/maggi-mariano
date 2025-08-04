import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel San Niccolò",
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"}  
});