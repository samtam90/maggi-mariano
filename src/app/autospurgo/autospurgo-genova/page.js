import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Genova",
    canonical: links.autospurgo["genova"],
});
export default withBaseProps({ 
    title: "Autospurgo Genova", 
    locationNames: {label: "Genova", href: "genova"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["genova"],
        name: "Genova",
    }),
});
