import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua L'Aquila",
  canonical: links.servizi["trasporto-acqua"]["l-aquila"]
});
export default withBaseProps({ 
    title: "Trasporto acqua L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});