import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici L'Aquila",
  canonical: links.servizi["noleggio-bagni-chimici"]["l-aquila"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici L'Aquila", 
  locationNames: {label: "L'Aquila", href: "l-aquila"} 
});
