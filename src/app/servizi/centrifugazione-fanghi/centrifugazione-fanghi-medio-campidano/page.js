import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Medio Campidano",
  canonical: links.servizi["centrifugazione-fanghi"]["medio-campidano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Medio Campidano",
  locationNames: { label: "Medio Campidano", href: "medio-campidano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["medio-campidano"],
      name: "Medio Campidano",
  }),
});
