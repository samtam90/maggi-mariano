import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Olbia-Tempio",
});
export default withBaseProps({ 
    title: "Trasporto acqua Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});