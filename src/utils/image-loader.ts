/**
 * 静的エクスポートでも画像最適化されるようにする
 * @example
 * ```tsx
 * <Image loader={imageLoader} {...} />
 * ```
 *
 * @see https://qiita.com/sakelog/items/ec0bc7f6d13ad5e0a17c
 */
export const imageLoader = ({ src }: { src: string }) => {
  // 内部画像しかないため一切の加工をしない
  return src;
};

export default imageLoader;
