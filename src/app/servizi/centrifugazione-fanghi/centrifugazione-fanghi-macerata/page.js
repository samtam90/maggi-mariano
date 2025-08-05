import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Macerata",
  canonical: links.servizi["centrifugazione-fanghi"]["macerata"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Macerata",
  locationNames: { label: "Macerata", href: "macerata" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["macerata"],
      name: "Macerata",
  }),
});
