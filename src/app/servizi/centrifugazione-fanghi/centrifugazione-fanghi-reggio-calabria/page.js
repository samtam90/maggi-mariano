import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Reggio Calabria",
  canonical: links.servizi["centrifugazione-fanghi"]["reggio-calabria"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Reggio Calabria",
  locationNames: { label: "Reggio Calabria", href: "reggio-calabria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["reggio-calabria"],
      name: "Reggio Calabria",
  }),
});
