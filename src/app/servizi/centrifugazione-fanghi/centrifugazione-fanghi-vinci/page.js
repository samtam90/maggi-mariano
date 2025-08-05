import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Vinci",
  canonical: links.servizi["centrifugazione-fanghi"]["vinci"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Vinci",
  locationNames: { label: "Vinci", href: "vinci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
