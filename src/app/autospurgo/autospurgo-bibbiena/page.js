import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Bibbiena",
    canonical: links.autospurgo["bibbiena"],
});
export default withBaseProps({ 
    title: "Autospurgo Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
