import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Dicomano",
});
export default withBaseProps({ 
    title: "Trasporto acqua Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});