import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Vibo Valentia",
    canonical: links.autospurgo["vibo-valentia"],
});
export default withBaseProps({ 
    title: "Autospurgo Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["vibo-valentia"],
        name: "Vibo Valentia",
    }),
});
