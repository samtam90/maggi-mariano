import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Lodi",
    canonical: links.autospurgo["lodi"],
});
export default withBaseProps({ 
    title: "Autospurgo Lodi", 
    locationNames: {label: "Lodi", href: "lodi"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["lodi"],
        name: "Lodi",
    }),
});
