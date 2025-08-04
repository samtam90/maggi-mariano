import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche L'Aquila",
  canonical: links.servizi["spurgo-fosse-biologiche"]["l-aquila"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});
