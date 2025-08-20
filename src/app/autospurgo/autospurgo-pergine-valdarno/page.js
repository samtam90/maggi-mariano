import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Pergine Valdarno",
    canonical: links.autospurgo["pergine-valdarno"],
});
export default withBaseProps({ 
    title: "Autospurgo Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
