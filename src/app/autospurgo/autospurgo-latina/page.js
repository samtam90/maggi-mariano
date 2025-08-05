import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Latina",
    canonical: links.autospurgo["latina"],
});
export default withBaseProps({ 
    title: "Autospurgo Latina", 
    locationNames: {label: "Latina", href: "latina"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["latina"],
        name: "Latina",
    }),
});
