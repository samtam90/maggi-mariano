import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Firenzuola",
    canonical: links.autospurgo["firenzuola"],
});
export default withBaseProps({ 
    title: "Autospurgo Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
