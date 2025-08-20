import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Grosseto",
    canonical: links.autospurgo["grosseto"],
});
export default withBaseProps({ 
    title: "Autospurgo Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["grosseto"],
        name: "Grosseto",
    }),
});
