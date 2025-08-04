import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel Focognano",
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"}  
});