import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Talla",
  canonical: links.servizi["centrifugazione-fanghi"]["talla"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Talla",
  locationNames: { label: "Talla", href: "talla" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
