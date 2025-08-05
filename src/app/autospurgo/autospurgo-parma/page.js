import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Parma",
    canonical: links.autospurgo["parma"],
});
export default withBaseProps({ 
    title: "Autospurgo Parma", 
    locationNames: {label: "Parma", href: "parma"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["parma"],
        name: "Parma",
    }),
});
