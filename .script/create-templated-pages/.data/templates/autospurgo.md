import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo [name]",
    canonical: links.autospurgo["[path]"],
});
export default withBaseProps({ 
    title: "Autospurgo [name]", 
    locationNames: {label: "[name]", href: "[path]"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["[province.path]"],
        name: "[province.name]",
    }),
});
