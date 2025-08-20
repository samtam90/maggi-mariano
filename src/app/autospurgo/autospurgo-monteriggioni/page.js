import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Monteriggioni",
    canonical: links.autospurgo["monteriggioni"],
});
export default withBaseProps({ 
    title: "Autospurgo Monteriggioni", 
    locationNames: {label: "Monteriggioni", href: "monteriggioni"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
